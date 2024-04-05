import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE_URL } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ApiData {
  _id: string;
  method: string;
  path: string;
  count: number;
}

const SecondComponent: React.FC = () => {
  const [data, setData] = useState<ApiData[]>([]);
  const [methodTotals, setMethodTotals] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<{ data: ApiData[] }>(
        `${API_BASE_URL}/api-logs`
      );
      console.log("API Response:", response.data);
      setData(response.data.data);

      const methodTotals: { [key: string]: number } = {};
      response.data.data.forEach((element) => {
        if (methodTotals[element.method]) {
          methodTotals[element.method] += element.count;
        } else {
          methodTotals[element.method] = element.count;
        }
      });
      setMethodTotals(methodTotals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center text-center py-2">
        <h2>API Data Counts: Tracking Requests by Method</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Method</TableHead>
            <TableHead>Total Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(methodTotals).map(([method, totalCount]) => (
            <TableRow key={method}>
              <TableCell>{method}</TableCell>
              <TableCell>{totalCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SecondComponent;
