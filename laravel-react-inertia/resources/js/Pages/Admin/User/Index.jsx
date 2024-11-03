import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Index() {
    //data = users
    const [data, setData] = useState([]);

    //use for update and delete
    const [user, setUser] = useState(null);

    // data loading and form proccesing state
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);

    //for modal create-update and delete
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    //form data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");

    //form validation errors
    const [errors, setErrors] = useState({});

    //function to get the data 
    const getData = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`/admin/getUser`);
            setData(res.data);
            // console.log(res.data);
        } catch (err) {
            console.log();
        } finally {
            setLoading(false);
        }
    };

    const openCreateModal = () => {
        setUser(null);
        setIsOpenModal(true);
    };

    const openEditModal = (user) => {
        setUser(user);
        setFormData(user);
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
        reset();
    };

    const setFormData = (data) => {
        setName(data.name);
        setEmail(data.email);
    };

    const reset = () => {
        setName("");
        setEmail("");
        setPassword("");
        setPassword_confirmation("");
        setErrors({});
    };

    //for create and edit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        if(user){
            //update/edit
            try{
                const res = await axios.put(`/admin/user/update/${user.id}`, {
                    name,
                    email,
                    password,
                    password_confirmation,
                });

                if (res.data.status === "updated") {
                    reset();
                    closeModal();
                    setUser(null);
                    getData();
                    //notification
                    alert("User updated successfully.");
                }

            }catch(err){
                if (err.response && err.response.status === 422) {
                    setErrors(err.response.data.errors);
                    // console.log(err);
                } else {
                    console.log(err);
                }
            }finally{
                setProcessing(false);
            }

        }else{ 
            //create
            try {
                const res = await axios.post(`/admin/user/store`, {
                    name,
                    email,
                    password,
                    password_confirmation,
                });

                if (res.data.status === "saved") {
                    reset();
                    closeModal();
                    getData();
                    //notification
                    alert("User created successfully.");
                }
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    setErrors(err.response.data.errors);
                    // console.log(err);
                } else {
                    console.log(err);
                }
            } finally {
                setProcessing(false);
            }
        }
    };

    const openDeleteModal = (user) => {
        setIsOpenDeleteModal(true);
        setUser(user);
    }

    const handleDelete = async () => {
        setProcessing(true);    
        try{
            const res = await axios.delete(`/admin/user/delete/${user.id}`);
            if(res.data.status === 'deleted'){
                setIsOpenDeleteModal(false);
                setUser(null);
                getData();
                //notification
                alert("User deleted successfully.");
            }
        }catch(err){
            console.log(err)
        }finally{
            setProcessing(false);
        }
    }

    //get data when page load
    useEffect(() => {
        getData();
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    List of Users
                </h2>
            }
        >
            <Head title="User" />

            {/* <pre className="text-gray-900">
                {JSON.stringify(users, null, 2)}
            </pre> */}

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="w-full overflow-auto">
                                <div className="m-4 flex items-center justify-end">
                                    <button
                                        onClick={openCreateModal}
                                        className="px-4 py-2 bg-gray-600 text-gray-50 transition-all duration-300 rounded hover:bg-gray-700"
                                    >
                                        Create
                                    </button>
                                </div>
                                <table className="w-full text-sm text-left text-gray-500 ">
                                    <thead className="text-md text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                                        <tr text-text-nowrap="true">
                                            <th className="px-3 py-3">ID</th>
                                            <th className="px-3 py-3">Name</th>
                                            <th className="px-3 py-3">Email</th>
                                            {/* <th className="px-3 py-3">
                                                Created At
                                            </th>
                                            <th className="px-3 py-3">
                                                Updated At
                                            </th> */}
                                            <th className="px-3 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr text-text-nowrap="true">
                                                <td
                                                    className="text-center py-12"
                                                    colSpan="5"
                                                >
                                                    Loading...
                                                </td>
                                            </tr>
                                        ) : (
                                            <>
                                                {data.map((user) => (
                                                    <tr
                                                        key={user.id}
                                                        className="text-base text-gray-900 bg-gray-50 border-b dark:border-gray-700"
                                                    >
                                                        <td className="px-3 py-2 text-nowrap">
                                                            {user.id}
                                                        </td>
                                                        <td className="px-3 py-2 text-nowrap">
                                                            {user.name}
                                                        </td>
                                                        <td className="px-3 py-2 text-nowrap">
                                                            {user.email}
                                                        </td>
                                                        {/* <td className="px-3 py-2 text-nowrap">
                                                            {user.created_at}
                                                        </td>
                                                        <td className="px-3 py-2 text-nowrap">
                                                            {user.updated_at}
                                                        </td> */}
                                                        <td className="px-3 py-2 text-nowrap">
                                                            <button
                                                                onClick={() =>
                                                                    openEditModal(
                                                                        user
                                                                    )
                                                                }
                                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    openDeleteModal(
                                                                        user
                                                                    )
                                                                }
                                                                className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={isOpenModal}>
                <div className="p-6 text-gray-900">
                    <h2 className="font-bold">Create User</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={name}
                                autoComplete="name"
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full"
                                // required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                autoComplete="username"
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full"
                                // required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                autoComplete="new-password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full"
                                // required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setPassword_confirmation(e.target.value)
                                }
                                className="mt-1 block w-full"
                                // required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 flex gap-2 items-center justify-end">
                            <SecondaryButton
                                onClick={closeModal}
                                disabled={processing}
                            >
                                Close
                            </SecondaryButton>
                            <PrimaryButton disabled={processing}>
                                Create
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal show={isOpenDeleteModal}>
                <div className="p-6 text-gray-900 ">
                    <h2 className="font-bold">Are you sure?</h2>
                    <p className="mt-4">
                        This action cannot be undone. This will permanently
                        delete the account and remove the data from systems.
                    </p>
                    <div className="mt-4 flex justify-end">
                        <SecondaryButton
                            onClick={() => setIsOpenDeleteModal(false)}
                        >
                            Cancel
                        </SecondaryButton>
                        <DangerButton disabled={processing} onClick={handleDelete} className="ml-2">
                            Delete
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
