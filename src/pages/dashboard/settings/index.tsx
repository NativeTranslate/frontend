import SettingsLayout from '@/components/layout/settings-layout';
import DashboardLayout from '@/components/layout/dashboard-layout';
import DashboardHeader from '@/components/shared/dashboard-header';
import { Switch } from '@/components/ui/switch';
import { Loader2, LockIcon, Mail, Phone, Pin, UserIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import CustomInput from '@/components/shared/custom-input';
import CustomSelect from '@/components/shared/custom-select';
import { CustomDatePicker } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import CustomTextarea from '@/components/shared/custom-text-area';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { users } from '@/lib/data/fakeUsers.ts';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/core/auth-context.tsx';
import { User } from '@/lib/core/api/types';
import { NativeTranslate } from '@/lib/core/nativetranslate.ts';
import { toast } from '@/components/ui/use-toast.ts';

type UserKey = keyof User;

const passwordRequirements = [
    'At least one special character (e.g., !@#$%^&*)',
    'Minimum length of 6 characters',
    'At least one number (two or more recommended)',
    'Change password regularly',
];

export default function ProfileSettings() {
    const userId = '1';
    const result = users.find(user => user.id === userId);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userData, setUserData] = useState({} as User);
    const [changes, setChanges] = useState<Partial<User>>({});

    const [passwordError, setPasswordError] = useState('');

    const auth = useAuth();

    const [resetPassword, setResetPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const userData = await auth.getMe();
            setUserData(userData);
            setIsLoaded(true);
        };

        fetchData();
    }, [auth]);

    const handleDateChange = (date: Date | undefined) => {
        if (!date) return;

        const timestamp = Math.floor(date.getTime() / 1000);
        setChanges({
            ...changes,
            dateOfBirth: timestamp,
        });
    };

    const convertTimestampToDate = (timestamp: number) => {
        return new Date(timestamp * 1000);
    };

    const handleSaveChanges = () => {
        setIsSubmitting(true);

        const settings = Object.keys(changes).reduce((acc, key) => {
            // @ts-ignore
            acc[key] = changes[key as UserKey]?.toString();
            return acc;
        }, {});

        NativeTranslate.getAPI()
            .changeSettings(settings)
            .then(() => {
                console.log('Settings updated');
                toast({
                    title: 'Success!',
                    description: 'Settings updated successfully.',
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleResetPassword = () => {
        setIsSubmitting(true);

        if (resetPassword.newPassword !== resetPassword.confirmPassword) {
            setPasswordError('Passwords do not match');
            setIsSubmitting(false);
            return;
        }

        NativeTranslate.getAPI()
            .resetUserPassword(
                resetPassword.currentPassword,
                resetPassword.newPassword,
            )
            .then(() => {
                toast({
                    title: 'Success!',
                    description: 'Password changed successfully.',
                });
                setPasswordError('');
            })
            .catch((error: any) => {
                setPasswordError(error.response.data.error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Settings - Profile" />
                <div className="flex-grow w-full rounded-3xl my-4 sm:my-10 bg-dark-300 overflow-y-auto">
                    <SettingsLayout>
                        {isLoaded ? (
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <div className="bg-dark-200 p-3 sm:p-4 rounded-3xl">
                                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5">
                                        <img
                                            src={result?.profilePicture}
                                            alt="profile"
                                            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-main-two"
                                        />
                                        <div className="flex flex-col items-center sm:items-start">
                                            <h1 className="font-semibold text-xl sm:text-2xl text-white-900 text-center sm:text-left">
                                                {userData?.username}
                                            </h1>
                                            <p className="text-base sm:text-lg text-gray-400 font-regular text-center sm:text-left">
                                                {userData?.role}
                                            </p>
                                        </div>
                                        <div className="flex-grow" />
                                        <div className="flex flex-col gap-2 items-center bg-dark-300 p-3 sm:p-4 rounded-3xl">
                                            <p className="text-center text-xs sm:text-sm text-gray-400">
                                                Switch to Invisible
                                            </p>
                                            <Switch />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-dark-200 p-3 sm:p-4 rounded-3xl">
                                    <h2 className="text-base sm:text-lg font-medium text-white-900">
                                        Basic Information
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-9 gap-4 items-center sm:gap-x-12 sm:gap-y-5">
                                        {/* Username */}
                                        <div className="space-y-2 sm:space-y-3 col-span-1 sm:col-span-2">
                                            <Label
                                                htmlFor="location"
                                                className="text-gray-400 text-xs sm:text-sm"
                                            >
                                                Username
                                            </Label>
                                            <CustomInput
                                                id="username"
                                                placeholder="JohnDoe"
                                                icon={<UserIcon size={20} />}
                                                onChange={event => {
                                                    setChanges({
                                                        ...changes,
                                                        username:
                                                            event.target.value,
                                                    });
                                                }}
                                                value={
                                                    changes.username ||
                                                    userData?.username
                                                }
                                            />
                                        </div>
                                        {/* Gender */}
                                        <div className="space-y-2 sm:space-y-3">
                                            <Label
                                                htmlFor="gender"
                                                className="text-gray-400 text-xs sm:text-sm"
                                            >
                                                Gender
                                            </Label>
                                            <CustomSelect
                                                id="gender"
                                                options={[
                                                    'Prefer not to say',
                                                    'Male',
                                                    'Female',
                                                    'Other',
                                                ]}
                                                onChange={value =>
                                                    setChanges({
                                                        ...changes,
                                                        gender: value,
                                                    })
                                                }
                                                defaultValue={
                                                    changes.gender ||
                                                    userData?.gender
                                                }
                                            />
                                        </div>
                                        {/* Date of Birth */}
                                        <div className="space-y-2 sm:space-y-3">
                                            <Label
                                                htmlFor="dateOfBirth"
                                                className="text-gray-400 text-xs sm:text-sm"
                                            >
                                                Date of Birth
                                            </Label>
                                            <CustomDatePicker
                                                id="dateOfBirth"
                                                onChange={handleDateChange}
                                                defaultValue={convertTimestampToDate(
                                                    changes.dateOfBirth ||
                                                        userData?.dateOfBirth,
                                                )}
                                            />
                                        </div>
                                        {/* Email */}
                                        <div className="space-y-2 sm:space-y-3">
                                            <Label
                                                htmlFor="email"
                                                className="text-gray-400 text-xs sm:text-sm"
                                            >
                                                Email
                                            </Label>
                                            <CustomInput
                                                disabled={true}
                                                id="email"
                                                placeholder="john.doe@doe.com"
                                                icon={<Mail size={20} />}
                                                onChange={event => {
                                                    setChanges({
                                                        ...changes,
                                                        email: event.target
                                                            .value,
                                                    });
                                                }}
                                                value={
                                                    changes?.email ||
                                                    userData?.email
                                                }
                                            />
                                        </div>
                                        {/* Phone */}
                                        <div className="space-y-2 sm:space-y-3">
                                            <Label
                                                htmlFor="phoneNumber"
                                                className="text-gray-400 text-xs sm:text-sm"
                                            >
                                                Phone
                                            </Label>
                                            <CustomInput
                                                id="phoneNumber"
                                                placeholder="+49 (0) 123 44 66 66"
                                                icon={<Phone size={20} />}
                                                onChange={event => {
                                                    setChanges({
                                                        ...changes,
                                                        phoneNumber:
                                                            event.target.value,
                                                    });
                                                }}
                                                value={
                                                    changes?.phoneNumber ||
                                                    userData?.phoneNumber
                                                }
                                            />
                                        </div>
                                        {/* Location */}
                                        <div className="space-y-2 sm:space-y-3 col-span-1 sm:col-span-2">
                                            <Label
                                                htmlFor="location"
                                                className="text-gray-400 text-xs sm:text-sm"
                                            >
                                                Location
                                            </Label>
                                            <CustomInput
                                                id="location"
                                                placeholder="John Street 123"
                                                icon={<Pin size={20} />}
                                                onChange={event => {
                                                    setChanges({
                                                        ...changes,
                                                        location:
                                                            event.target.value,
                                                    });
                                                }}
                                                value={
                                                    changes?.location ||
                                                    userData?.location
                                                }
                                            />
                                        </div>
                                        {/* Bio */}
                                        <div className="space-y-2 sm:space-y-3 col-span-1 sm:col-span-2">
                                            <Label
                                                htmlFor="bio"
                                                className="text-gray-400 text-xs sm:text-sm"
                                            >
                                                About Me
                                            </Label>
                                            <CustomTextarea
                                                id="bio"
                                                value={
                                                    changes?.bio ||
                                                    userData?.bio
                                                }
                                                onChange={event => {
                                                    setChanges({
                                                        ...changes,
                                                        bio: event.target.value,
                                                    });
                                                }}
                                                placeholder="Tell us something about yourself"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-5 flex justify-end">
                                        <Button
                                            disabled={isSubmitting}
                                            onClick={handleSaveChanges}
                                            className="bg-main-two rounded-3xl hover:bg-main-one transition-all text-sm sm:text-base"
                                        >
                                            Save Changes
                                            {isSubmitting && (
                                                <Loader2 className="animate-spin mr-2" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-dark-200 p-3 sm:p-4 rounded-3xl">
                                    <h2 className="text-base sm:text-lg font-medium text-white-900">
                                        Change Password
                                    </h2>
                                    <div className="grid grid-cols-1 mt-6 sm:mt-9 gap-4 sm:gap-x-12 sm:gap-y-5">
                                        <div>
                                            <CustomInput
                                                placeholder="Enter current password"
                                                icon={<LockIcon size={20} />}
                                                id="currentPassword"
                                                type={'password'}
                                                onChange={event => {
                                                    setResetPassword({
                                                        ...resetPassword,
                                                        currentPassword:
                                                            event.target.value,
                                                    });
                                                }}
                                                value={
                                                    resetPassword.currentPassword
                                                }
                                            />
                                        </div>
                                        <div>
                                            <CustomInput
                                                placeholder="Enter new password"
                                                icon={<LockIcon size={20} />}
                                                id="newPassword"
                                                type={'password'}
                                                onChange={event => {
                                                    setResetPassword({
                                                        ...resetPassword,
                                                        newPassword:
                                                            event.target.value,
                                                    });
                                                }}
                                                value={
                                                    resetPassword.newPassword
                                                }
                                            />
                                        </div>
                                        <div>
                                            <CustomInput
                                                type={'password'}
                                                placeholder="Confirm new password"
                                                icon={<LockIcon size={20} />}
                                                id="confirmPassword"
                                                onChange={event => {
                                                    setResetPassword({
                                                        ...resetPassword,
                                                        confirmPassword:
                                                            event.target.value,
                                                    });
                                                }}
                                                value={
                                                    resetPassword.confirmPassword
                                                }
                                            />
                                        </div>
                                        <div className="mt-2 flex flex-col gap-3 sm:gap-5">
                                            <div className="space-y-2">
                                                <h3 className="text-white-900 font-medium text-sm sm:text-base">
                                                    Recommended Password
                                                    Requirements
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-400">
                                                    Please follow this guide for
                                                    a strong password:
                                                </p>
                                                <ul className="mx-2">
                                                    {passwordRequirements.map(
                                                        (
                                                            requirement,
                                                            index,
                                                        ) => (
                                                            <li
                                                                key={index}
                                                                className="text-xs sm:text-sm text-gray-400 flex items-center gap-1"
                                                            >
                                                                <DotFilledIcon />
                                                                {requirement}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        {passwordError && (
                                            <p className="text-red-500 font-medium">
                                                {passwordError}
                                            </p>
                                        )}

                                        <Button
                                            onClick={handleResetPassword}
                                            disabled={isSubmitting}
                                            className="bg-main-two rounded-3xl hover:bg-main-one transition-all text-sm sm:text-base"
                                        >
                                            Change Password
                                            {isSubmitting && (
                                                <Loader2 className="animate-spin mr-2" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <p className="text-white-900 text-lg font-medium">
                                    Loading...
                                </p>
                            </div>
                        )}
                    </SettingsLayout>
                </div>
            </div>
        </DashboardLayout>
    );
}
