import SettingsLayout from '@/components/layout/settings-layout.tsx';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { users } from '@/lib/fake-data.ts';
import { Switch } from '@/components/ui/switch.tsx';
import { LockIcon, Mail, Phone, Pin, User } from 'lucide-react';
import { Label } from '@/components/ui/label.tsx';
import CustomInput from '@/components/shared/custom-input.tsx';
import CustomSelect from '@/components/shared/custom-select.tsx';
import { CustomDatePicker } from '@/components/ui/date-picker.tsx';
import { Button } from '@/components/ui/button.tsx';
import CustomTextarea from '@/components/shared/custom-text-area.tsx';
import { DotFilledIcon } from '@radix-ui/react-icons';

const passwordRequirements = [
    'At least one special character (e.g., !@#$%^&*)',
    'Minimum length of 6 characters',
    'At least one number (two or more recommended)',
    'Change password regularly'
];


const ProfileSettings = () => {

    const userId = '1';

    const result = users.find(user => user.id === userId);

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Settings - Profile" />
                <div className="flex-grow w-full rounded-3xl my-10 bg-dark-300 overflow-y-auto">
                    <SettingsLayout>
                        <div className={'flex flex-col gap-5'}>
                            <div className={'bg-dark-200 p-4 rounded-3xl'}>
                                <div className={'flex flex-row items-center space-x-5'}>
                                    <img
                                        src={result?.profilePicture}
                                        alt="profile"
                                        className="w-24 h-24 rounded-full object-cover border-4 border-main-two"
                                    />
                                    <div className={'flex flex-col'}>
                                        <h1 className={'font-semibold text-2xl text-white-900'}>
                                            {result?.name}
                                        </h1>
                                        <p className={'text-lg text-gray-400 font-regular'}>
                                            {result?.role}
                                        </p>
                                    </div>
                                    <div className={'flex-grow'} />
                                    <div className={'flex flex-col gap-2 items-center bg-dark-300 p-4 rounded-3xl'}>
                                        <p className={'text-center text-sm text-gray-400'}>Switch to Invisible</p>
                                        <Switch />
                                    </div>
                                </div>
                            </div>
                            <div className={'bg-dark-200 p-4 rounded-3xl'}>
                                <h2 className={'text-lg font-medium text-white-900'}>Basic Information</h2>
                                <div className={'grid grid-cols-2 mt-9 gap-x-12 gap-y-5'}>
                                    <div className={'space-y-3'}>
                                        <Label htmlFor="firstName" className="text-gray-400 text-sm">
                                            First Name
                                        </Label>
                                        <CustomInput
                                            id="firstName"
                                            placeholder="John"
                                            icon={<User size={24} />}
                                            onChange={() => {
                                            }} value={''} />
                                    </div>
                                    <div className={'space-y-3'}>
                                        <Label htmlFor="lastName" className="text-gray-400 text-sm">
                                            Last Name
                                        </Label>
                                        <CustomInput
                                            id="lastName"
                                            placeholder="Doe"
                                            icon={<User size={24} />}
                                            onChange={() => {
                                            }} value={''} />
                                    </div>
                                    <div className={'space-y-3'}>
                                        <Label htmlFor="gender" className="text-gray-400 text-sm">
                                            Gender
                                        </Label>
                                        <CustomSelect id="gender" options={['Male', 'Female', 'Other']}
                                                      placeholder={`${result?.gender}`}
                                                      onChange={() => {
                                                      }} />
                                    </div>
                                    <div className={'space-y-3 flex flex-col'}>
                                        <Label htmlFor="dob" className="text-gray-400 text-sm">
                                            Date of Birth
                                        </Label>
                                        <CustomDatePicker />
                                    </div>
                                    <div className={'space-y-3'}>
                                        <Label htmlFor="email" className="text-gray-400 text-sm">
                                            Email
                                        </Label>
                                        <CustomInput
                                            id="email"
                                            placeholder="john.doe@doe.com"
                                            icon={<Mail size={24} />}
                                            onChange={() => {
                                            }} value={''} />
                                    </div>
                                    <div className={'space-y-3'}>
                                        <Label htmlFor="phone" className="text-gray-400 text-sm">
                                            Phone
                                        </Label>
                                        <CustomInput
                                            id="phone"
                                            placeholder="+49 (0) 123 44 66 66"
                                            icon={<Phone size={24} />}
                                            onChange={() => {
                                            }} value={''} />
                                    </div>

                                    <div className={'space-y-3 col-span-2'}>
                                        <Label htmlFor="location" className="text-gray-400 text-sm">
                                            Location
                                        </Label>
                                        <CustomInput
                                            id="location"
                                            placeholder="John Street 123"
                                            icon={<Pin size={24} />}
                                            onChange={() => {
                                            }} value={''} />
                                    </div>

                                    <div className={'space-y-3 col-span-2'}>
                                        <Label htmlFor="aboutMe" className="text-gray-400 text-sm">
                                            About Me
                                        </Label>
                                        <CustomTextarea

                                            placeholder="Tell us something about yourself"

                                        />
                                    </div>
                                </div>

                                <div className={'mt-5 flex justify-end'}>
                                    <Button className={'bg-main-two rounded-3xl hover:bg-main-one transition-all'}>
                                        Save Changes
                                    </Button>
                                </div>
                            </div>
                            <div className={'bg-dark-200 p-4 rounded-3xl'}>
                                <h2 className={'text-lg font-medium text-white-900'}>Change Password</h2>
                                <div className={'grid grid-cols-1 mt-9 gap-x-12 gap-y-5'}>
                                    <div>
                                        <CustomInput

                                            placeholder={'Enter current password'}
                                            icon={<LockIcon size={24} />} id={''}
                                            onChange={function(): void {
                                                throw new Error('Function not implemented.');
                                            }} value={''} />
                                    </div>
                                    <div>
                                        <CustomInput

                                            placeholder={'Enter new password'}
                                            icon={<LockIcon size={24} />} id={''}
                                            onChange={function(): void {
                                                throw new Error('Function not implemented.');
                                            }} value={''} />
                                    </div>
                                    <div>
                                        <CustomInput

                                            placeholder={'Confirm new password'}
                                            icon={<LockIcon size={24} />} id={''}
                                            onChange={function(): void {
                                                throw new Error('Function not implemented.');
                                            }} value={''} />
                                    </div>

                                    <div className={'mt-2 flex flex-col gap-5'}>
                                        <div className={'space-y-2'}>
                                            <h3 className={'text-white-900 font-medium'}>Password Requirements</h3>
                                            <p className={'text-sm text-gray-400'}>Please follow this guide for a strong
                                                password:</p>
                                            <ul className={'mx-2'}>
                                                {passwordRequirements.map((requirement, index) => (
                                                    <li key={index}
                                                        className={'text-sm text-gray-400 flex items-center gap-1'}>
                                                        <DotFilledIcon />
                                                        {requirement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SettingsLayout>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ProfileSettings;
