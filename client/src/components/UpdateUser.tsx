// UpdateUser.tsx
import React, { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  user: any;
  onClose: () => void;
  onSuccess: () => void;
}

const UpdateUser: React.FC<Props> = ({ user, onClose, onSuccess }) => {
  const [formValues, setFormValues] = useState({
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/update/${user._id}`,
        formValues
      );
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Dialog open>
      <DialogContent className="bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle>Edit User (ID: {formValues._id})</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleUpdateUser}>
          <div className="grid gap-4 py-4">
            <div className="flex justify-start items-start flex-col gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                value={formValues.name}
                name="name"
                onChange={handleInputChange}
                required
                className="w-full bg-black"
              />
            </div>

            <div className="flex justify-start items-start flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={formValues.email}
                name="email"
                onChange={handleInputChange}
                required
                className="w-full bg-black"
              />
            </div>

            <div className="flex justify-start items-start flex-col gap-4">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                value={formValues.phone}
                name="phone"
                onChange={handleInputChange}
                required
                className="w-full bg-black"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-green-800 hover:bg-green-700">
              Update
            </Button>
            <Button
              type="button"
              className="bg-slate-800 hover:bg-slate-700"
              onClick={onClose}
            >
              Close
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUser;
