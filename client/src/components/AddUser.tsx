import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddUser: React.FC = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(value);
    setValue({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-black text-white">Add User</Button>
        </DialogTrigger>
        <DialogContent className="bg-black text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex justify-start items-start flex-col gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={value.name}
                  name="name"
                  onChange={handleOnchange}
                  required
                  className="w-full bg-black"
                />
              </div>

              <div className="flex justify-start items-start flex-col gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={value.email}
                  name="email"
                  onChange={handleOnchange}
                  required
                  className="w-full bg-black"
                />
              </div>

              <div className="flex justify-start items-start flex-col gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  type="text"
                  id="phone"
                  value={value.phone}
                  name="phone"
                  onChange={handleOnchange}
                  required
                  className="w-full bg-black"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
