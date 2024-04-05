import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateUser from "./UpdateUser";
import { Button } from "./ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { API_BASE_URL } from "@/lib/utils";

interface UserData {
  _id: any;
  name: string;
  email: string;
  phone: string;
}

const TableData: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setData(response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleDeleteConfirmation = (userId: string) => {
    setConfirmDeleteId(userId);
  };

  const handleEditUser = (user: UserData) => {
    setSelectedUser(user);
  };

  const handleDeleteCancel = () => {
    setConfirmDeleteId(null);
  };

  const handleDeleteConfirmed = async (userId: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${userId}`);
      fetchData(); // Refresh data after delete
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setConfirmDeleteId(null);
    }
  };

  return (
    <div className="text-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell className="flex justify-center items-center gap-2 text-xl">
                <p
                  className="cursor-pointer text-green-400"
                  onClick={() => handleEditUser(item)}
                >
                  <FaEdit />
                </p>
                <p
                  className="cursor-pointer text-red-600"
                  onClick={() => handleDeleteConfirmation(item._id)}
                >
                  <MdDelete />
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {confirmDeleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-black p-8 rounded-md shadow-md">
            <p>Are you sure you want to delete this user?</p>
            <div className="mt-4 flex justify-between">
              <Button
                className="px-4 py-2 bg-red-800 hover:bg-red-700"
                onClick={() => handleDeleteConfirmed(confirmDeleteId)}
              >
                Delete
              </Button>
              <Button
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700"
                onClick={handleDeleteCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {selectedUser && (
        <UpdateUser
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSuccess={fetchData}
        />
      )}
    </div>
  );
};

export default TableData;
