
import { useState } from "react";
import avatar from "../assets/icons/avatar.svg"
import Button from "../components/Button"

const AccountSettings = () => {
    const [accountFormData, setAccountFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        gender: ''
    });
    const [accountErrors, setAccountErrors] = useState({});
    const handleAccountFormChange = (event) => {
        const { name, value } = event.target;
        setAccountFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAccountFormSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateAccountForm(accountFormData);
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, handle submission
            console.log('Form submitted:', accountFormData);
            // Reset form data
            setAccountFormData({
                firstName: '',
                lastName: '',
                emailAddress: '',
                phoneNumber: '',
                gender: ''
            });
        } else {
            // Form has errors, display validation errors
            setAccountErrors(validationErrors);
        }
    };

    const validateAccountForm = (data) => {
        let errors = {};
        if (!data.firstName) {
            errors.firstName = 'first name is required';
        }
        if (!data.lastName) {
            errors.lastName = 'last name is required';
        }
        if (!data.emailAddress) {
            errors.emailAddress = 'email address is required';
        } else if (!isValidEmail(data.emailAddress)) {
            errors.emailAddress = 'invalid email format';
        }
        if (!data.phoneNumber) {
            errors.phoneNumber = 'phone number is required';
        } else if (!isValidPhone(data.phoneNumber)) {
            errors.phoneNumber = 'invalid phone number format';
        }
        if (!data.gender) {
            errors.gender = 'gender is required';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const isValidPhone = (phoneNumber) => {
        const phonePattern = /^0\d{10}$/;
        return phonePattern.test(phoneNumber);
    };

    return (
        <div>
            <div className="pb-6 border-b border-[#F3F3F3]">
                <h4 className="font-semibold text-gray-900 text-xl">Account  Details</h4>
                <p className="mt-1.5 text-gray-600">Manage your Accman profile</p>
            </div>
            <div className="mt-8">
                <div className="flex items-center gap-2">
                    <img src={avatar} className="h-12 w-12 rounded-full" alt="" />
                    <div>
                        <h5 className="text-[#09090B] font-medium">Profile picture</h5>
                        <p className="text-[#71717A] text-xs">JPG, PNG max of 2MB</p>
                    </div>
                </div>
                <div className="border-b border-[#F3F3F3] pb-9">
                    <form className="mt-12 grid grid-cols-1 lg:grid-cols-2 md:gap-x-10 lg:gap-x-10 xl:gap-x-14 gap-y-5 md:gap-y-7 pb-9">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="firstName" className="font-medium text-sm text-[#09090B]">First Name</label>
                            <input type="text" name="firstName" id="firstName" value={accountFormData.firstName}
                                onChange={handleAccountFormChange} placeholder="John" className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" />
                            {accountErrors.firstName && <div className="text-red-600 text-sm">{accountErrors.firstName}</div>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="lastName" className="font-medium text-sm text-[#09090B]">Last Name</label>
                            <input type="text" name="lastName" id="lastName" value={accountFormData.lastName}
                                onChange={handleAccountFormChange} placeholder="Doe" className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" />
                            {accountErrors.lastName && <div className="text-red-600 text-sm">{accountErrors.lastName}</div>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="emailAddress" className="font-medium text-sm text-[#09090B]">Email Address</label>
                            <input type="email" name="emailAddress" id="emailAddress" value={accountFormData.emailAddress}
                                onChange={handleAccountFormChange} placeholder="johndoe@gmail.com" className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" />
                            {accountErrors.emailAddress && <div className="text-red-600 text-sm">{accountErrors.emailAddress}</div>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="phoneNumber" className="font-medium text-sm text-[#09090B]">Phone Number</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" value={accountFormData.phoneNumber}
                                onChange={handleAccountFormChange} placeholder="080********" className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" />
                            {accountErrors.phoneNumber && <div className="text-red-600 text-sm">{accountErrors.phoneNumber}</div>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="gender" className="font-medium text-sm text-[#09090B]">Gender</label>
                            <select name="gender" defaultValue={''} className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" onChange={handleAccountFormChange}>
                                <option value="" disabled>Select an option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {accountErrors.gender && <div className="text-red-600 text-sm">{accountErrors.gender}</div>}
                        </div>
                    </form>

                    <Button btnText={'Update Account'} btnClass={'w-[144px]'} onClick={handleAccountFormSubmit} />
                </div>
                <div className="mt-7">
                    <span className="cursor-pointer text-sm text-red-600">Delete</span>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings