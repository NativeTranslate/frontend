'use client';

import { useState } from 'react';
import DashboardLayout from '@/pages/dashboard/layout';
import DashboardHeader from '@/components/nativetranslate/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
    Facebook,
    Github,
    Globe,
    Instagram,
    Linkedin,
    Settings,
    Twitter,
} from 'lucide-react';
import { Input } from '@/components/nativetranslate/input';
import { Textarea } from '@/components/nativetranslate/textarea';
import { Button } from '@/components/nativetranslate/button';
import {
    SetupTabs,
    TabContent,
    TabHeader,
} from '@/components/nativetranslate/custom-tabs.tsx';

export default function SettingsPage() {
    const [formData, setFormData] = useState({
        username: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        location: '',
        bio: '',
        password: '',
        confirmPassword: '',
        emailNotifications: true,
        socialLinks: {
            facebook: '',
            twitter: '',
            linkedin: '',
            github: '',
            instagram: '',
            website: '',
        },
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSocialLinkChange = (platform: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            socialLinks: { ...prev.socialLinks, [platform]: value },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted', formData);
    };

    const handleDeleteAccount = () => {
        console.log('Account deleted');
    };

    const socialPlatforms = {
        facebook: {
            name: 'Facebook',
            icon: Facebook,
            placeholder: 'Facebook',
        },
        twitter: {
            name: 'Twitter',
            icon: Twitter,
            placeholder: 'Twitter (X)',
        },
        linkedin: {
            name: 'LinkedIn',
            icon: Linkedin,
            placeholder: 'LinkedIn',
        },
        github: {
            name: 'GitHub',
            icon: Github,
            placeholder: 'GitHub',
        },
        instagram: {
            name: 'Instagram',
            icon: Instagram,
            placeholder: 'Instagram',
        },
        website: {
            name: 'Website',
            icon: Globe,
            placeholder: 'Own Website',
        },
    };

    return (
        <DashboardLayout>
            <DashboardHeader
                title="Settings"
                description="Manage your account settings and preferences."
                icon={Settings}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <SetupTabs defaultTab="general" className="w-full">
                        <TabHeader id="general">General</TabHeader>
                        <TabHeader id="account">Account</TabHeader>

                        <TabContent id="general">
                            <Card className="bg-light-one dark:bg-dark-one">
                                <CardHeader>
                                    <CardTitle>General Settings</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="username">
                                                Username
                                            </Label>
                                            <Input
                                                label="John Doe"
                                                id="username"
                                                value={formData.username}
                                                onChange={e =>
                                                    handleInputChange(
                                                        'username',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="gender">
                                                Gender
                                            </Label>
                                            <Select
                                                onValueChange={value =>
                                                    handleInputChange(
                                                        'gender',
                                                        value,
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="h-14 border">
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">
                                                        Male
                                                    </SelectItem>
                                                    <SelectItem value="female">
                                                        Female
                                                    </SelectItem>
                                                    <SelectItem value="other">
                                                        Other
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="dateOfBirth">
                                                Date of Birth
                                            </Label>
                                            <Input
                                                label="26/05/1999"
                                                id="dateOfBirth"
                                                type="date"
                                                value={formData.dateOfBirth}
                                                onChange={e =>
                                                    handleInputChange(
                                                        'dateOfBirth',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                label="jd@example.com"
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                disabled={true}
                                                onChange={e =>
                                                    handleInputChange(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                label="+1 234 567 890"
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={e =>
                                                    handleInputChange(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="location">
                                                Location
                                            </Label>
                                            <Input
                                                label="New York, USA"
                                                id="location"
                                                value={formData.location}
                                                onChange={e =>
                                                    handleInputChange(
                                                        'location',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea
                                            label="A software engineer by profession."
                                            id="bio"
                                            value={formData.bio}
                                            onChange={e =>
                                                handleInputChange(
                                                    'bio',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">
                                            New Password
                                        </Label>
                                        <Input
                                            label="********"
                                            id="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={e =>
                                                handleInputChange(
                                                    'password',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">
                                            Confirm New Password
                                        </Label>
                                        <Input
                                            label="********"
                                            id="confirmPassword"
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={e =>
                                                handleInputChange(
                                                    'confirmPassword',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabContent>

                        <TabContent id="account">
                            <Card className="bg-light-one dark:bg-dark-one w-full mb-2">
                                <CardHeader>
                                    <CardTitle>Account Settings</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 w-full flex flex-col">
                                    <div className="space-y-2 w-full flex flex-col">
                                        <Label>Social Media Links</Label>
                                        {Object.entries(socialPlatforms).map(
                                            ([
                                                key,
                                                { icon: Icon, placeholder },
                                            ]) => (
                                                <div
                                                    key={key}
                                                    className="space-x-2 w-full flex flex-col"
                                                >
                                                    <Input
                                                        icon={Icon}
                                                        iconDirection={'left'}
                                                        placeholder={
                                                            placeholder
                                                        }
                                                        label={placeholder}
                                                        value={
                                                            formData
                                                                .socialLinks[
                                                                key as keyof typeof formData.socialLinks
                                                            ]
                                                        }
                                                        onChange={e =>
                                                            handleSocialLinkChange(
                                                                key,
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="w-full"
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="email-notifications"
                                            checked={
                                                formData.emailNotifications
                                            }
                                            onCheckedChange={checked =>
                                                handleInputChange(
                                                    'emailNotifications',
                                                    checked.toString(),
                                                )
                                            }
                                        />
                                        <Label htmlFor="email-notifications">
                                            Receive email notifications
                                        </Label>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-light-one dark:bg-dark-one">
                                <CardHeader>
                                    <CardTitle>Danger Zone</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="default_outline">
                                                Delete Account
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Are you absolutely sure?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be
                                                    undone. This will
                                                    permanently delete your
                                                    account and remove your data
                                                    from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={
                                                        handleDeleteAccount
                                                    }
                                                >
                                                    Delete Account
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </CardContent>
                            </Card>
                        </TabContent>
                    </SetupTabs>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="bg-primary hover:bg-secondary transition-all"
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>
            </DashboardHeader>
        </DashboardLayout>
    );
}
