import { useState } from "react";
import userIcon from "../assets/icons/user-icon.svg"
import lock from "../assets/icons/lock.svg"
import avatar from "../assets/icons/avatar.svg"
import Button from "../components/Button"

function Settings() {
    const [accountFormData, setAccountFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        gender: ''
    });
    const [accountErrors, setAccountErrors] = useState({});

    const [settingsFormData, setSettingsFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [settingsErrors, setSettingsErrors] = useState({});

    const [tab, setTab] = useState('accountDetails')

    const handleTabToggle = (tabName) => {
        setTab(tabName)
    }

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

    const handleSettingsFormChange = (event) => {
        const { name, value } = event.target;
        setSettingsFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSettingsFormSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateSettingsForm(settingsFormData);
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, handle submission
            console.log('Form submitted:', settingsFormData);
            // Reset form data
            setSettingsFormData({
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
        } else {
            // Form has errors, display validation errors
            setSettingsErrors(validationErrors);
        }
    };

    const validateSettingsForm = (data) => {
        let errors = {};
        if (!data.oldPassword) {
            errors.oldPassword = 'old password is required';
        }
        if (!data.newPassword) {
            errors.newPassword = 'new password is required';
        } else if (!isValidPassword(data.newPassword)) {
            errors.newPassword = 'invalid password format';
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = 'confirm password is required';
        } else if (data.newPassword !== data.confirmPassword) {
            errors.confirmPassword = 'password mismatch ';
        }
        return errors;
    };

    const isValidPassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;':",.<>?~`\-=/\\]).{8,}$/;
        return passwordPattern.test(password);
    };



    return (
        <div className="bg-[#F9FAFB] flex gap-8 p-10">
            <div className="flex flex-col gap-6 w-[240px]">
                <h3 className="text-gray-900 font-medium text-base">General</h3>

                <ul className="flex flex-col">
                    <li onClick={() => handleTabToggle('accountDetails')} className={`flex items-center gap-4 px-4 py-2.5 rounded-md cursor-pointer ${tab === 'accountDetails' ? 'bg-zinc-200' : 'bg-transparent'}`}>
                        <img src={userIcon} alt="" />
                        <span className="text-zinc-700 text-sm">Account Details</span>
                    </li>
                    <li onClick={() => handleTabToggle('security')} className={`flex items-center gap-4 px-4 py-2.5 rounded-md cursor-pointer ${tab === 'security' ? 'bg-zinc-200' : 'bg-transparent'}`}>
                        <img src={lock} alt="" />
                        <span className="text-zinc-700 text-sm">Security</span>
                    </li>
                </ul>
            </div>
            <div className="flex-1 bg-white shadow rounded-md px-10 py-8">
                {tab === 'accountDetails' && <div>
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
                </div>}
                {tab === 'security' && <div>
                    <div className="pb-6 border-b border-[#F3F3F3]">
                        <h4 className="font-semibold text-gray-900 text-xl">Change Password</h4>
                        <p className="mt-1.5 text-gray-600">Secure your accman account</p>
                    </div>
                    <div className="mt-8">
                        <form className="mt-12 grid grid-cols-1 gap-y-5 md:gap-y-7 pb-9 border-b border-[#F3F3F3]">
                            <div className="flex flex-col gap-1 lg:w-1/2">
                                <label htmlFor="oldPassword" className="font-medium text-sm text-[#09090B]">Current password</label>
                                <input type="password" name="oldPassword" id="oldPassword" value={settingsFormData.oldPassword}
                                    onChange={handleSettingsFormChange} placeholder="**************" className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" />
                                {settingsErrors.oldPassword && <div className="text-red-600 text-sm">{settingsErrors.oldPassword}</div>}
                            </div>
                            <div className="flex flex-col gap-1 lg:w-1/2">
                                <label htmlFor="newPassword" className="font-medium text-sm text-[#09090B]">New password</label>
                                <input type="password" name="newPassword" id="newPassword" value={settingsFormData.newPassword}
                                    onChange={handleSettingsFormChange} placeholder="**************" className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" />
                                {settingsErrors.newPassword && <div className="text-red-600 text-sm">{settingsErrors.newPassword}</div>}
                            </div>
                            <div className="flex flex-col gap-1 lg:w-1/2">
                                <label htmlFor="confirmPassword" className="font-medium text-sm text-[#09090B]">Confirm new password</label>
                                <input type="password" name="confirmPassword" id="confirmPassword" value={settingsFormData.confirmPassword}
                                    onChange={handleSettingsFormChange} placeholder="**************" className="px-4 py-2 rounded-md border border-[#E4E4E7] outline-none" />
                                {settingsErrors.confirmPassword && <div className="text-red-600 text-sm">{settingsErrors.confirmPassword}</div>}
                            </div>

                            <Button btnText={'Change password'} btnClass={'w-[144px]'} onClick={handleSettingsFormSubmit} />
                        </form>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Settings