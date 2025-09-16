"use client"; // нужно за client-side компонент в Next.js App Router
import { useState } from "react";
import TextInput from "./TextInput";

export default function GuestForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        idType: "",
        idNumber: "",
        country: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Данните са изпратени (demo)!");
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-orange-700 shadow-md rounded-md mt-10 text-white">
            <h2 className="text-2xl font-semibold mb-4">Check-in form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextInput
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="example: John"
                    required
                />
                <TextInput
                    label="Middle Name"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    placeholder="example: Michael"
                />
                <TextInput
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="example: Smith"
                    required
                />

                <div className="flex gap-4">
                    <div >
                        <label htmlFor="dateOfBirth" className="mb-1 font-medium text-gray-200">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            placeholder="Date of birth"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-200">Gender:</span>

                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="gender"
                                value="M"
                                checked={formData.gender === "M"}
                                onChange={handleChange}
                                className="accent-blue-500"
                                required
                            />
                            M
                        </label>

                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="gender"
                                value="F"
                                checked={formData.gender === "F"}
                                onChange={handleChange}
                                className="accent-blue-500"
                                required
                            />
                            F
                        </label>
                    </div>

                </div>

                <div className="flex items-center gap-3">
                    <span className="text-white font-medium">ID Type:</span>

                    <label className="flex items-center gap-1">
                        <input
                            type="radio"
                            name="idType"
                            value="Passport"
                            checked={formData.idType === "Passport"}
                            onChange={handleChange}
                            className="accent-blue-500"
                            required
                        />
                        Passport
                    </label>

                    <label className="flex items-center gap-1">
                        <input
                            type="radio"
                            name="idType"
                            value="ID Card"
                            checked={formData.idType === "ID Card"}
                            onChange={handleChange}
                            className="accent-green-500"
                            required
                        />
                        ID Card
                    </label>

                    <label className="flex items-center gap-1">
                        <input
                            type="radio"
                            name="idType"
                            value="Driver's License"
                            checked={formData.idType === "Driver's License"}
                            onChange={handleChange}
                            className="accent-pink-500"
                            required
                        />
                        Driver's License
                    </label>
                </div>

                <TextInput
                    label="Document number"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    placeholder="example: 123456789"
                    required
                />

                <TextInput
                    label="Country of issuance of the document"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="example: United Kingdom"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}