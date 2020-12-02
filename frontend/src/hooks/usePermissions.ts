import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

interface Permission {
  permission: number;
  error: string;
  description: string;
}

const permissions: Permission[] = [
  {
    permission: 1,
    error: "You're a user, you should can't see this route",
    description: "Professor"
  },
  {
    permission: 2,
    error: "You're a user, you should can't see this route",
    description: "Secretary"
  },
  {
    permission: 3,
    error: "You're a user, you should can't see this route",
    description: "Doctor"
  },
  {
    permission: 4,
    error: "You're a user, you should can't see this route",
    description: "Students"
  },
]


const usePermissions = (validate: number): boolean => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [permission, setPermission] = useState<boolean>(false);
  useEffect(() => {
    setPermission(user?.enum_user === validate);
  }, [setPermission]);

  return permission
}

export default usePermissions;
