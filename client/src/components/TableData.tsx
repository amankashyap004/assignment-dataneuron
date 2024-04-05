import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableData: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FeatchData() {
      try {
        const user = await axios.get("http://localhost:8000/api/get");
        const response = user.data;
        console.log(response.users);
        setData(response.users);
      } catch (error) {
        console.log(error);
      }
    }
    FeatchData();
  }, []);
  return (
    <div>
      <Table>
        <TableCaption>list of User</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell className="flex justify-center items-center gap-2 text-xl">
                <a href="#" className="cursor-pointer text-green-400">
                  <FaEdit />
                </a>
                <a href="#" className="cursor-pointer text-red-600">
                  <MdDelete />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;
