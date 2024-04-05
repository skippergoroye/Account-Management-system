
import { useState } from "react";
import Button from "../components/Button"

const SecuritySettings = () => {
    const [settingsFormData, setSettingsFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [settingsErrors, setSettingsErrors] = useState({});

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
        <div>
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
        </div>
    )
}

export default SecuritySettings