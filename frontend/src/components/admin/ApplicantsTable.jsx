// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     const statusHandler = async (status, id) => {
//         console.log('called');
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             console.log(res);
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     }

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied user</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         applicants && applicants?.applications?.map((item) => (
//                             <tr key={item._id}>
//                                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                                 <TableCell>{item?.applicant?.email}</TableCell>
//                                 <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                                 <TableCell >
//                                     {
//                                         item.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
//                                     }
//                                 </TableCell>
//                                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="float-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             {
//                                                 shortlistingStatus.map((status, index) => {
//                                                     return (
//                                                         <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
//                                                             <span>{status}</span>
//                                                         </div>
//                                                     )
//                                                 })
//                                             }
//                                         </PopoverContent>
//                                     </Popover>

//                                 </TableCell>

//                             </tr>
//                         ))
//                     }

//                 </TableBody>

//             </Table>
//         </div>
//     )
// }

// export default ApplicantsTable
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);

    const statusHandler = async (status, id) => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
            if (res.data.success) toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "Error updating status");
        }
    }

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Application Form</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    { applicants?.applications?.map(item => (
                        <TableRow key={item._id}>
                            <TableCell>{item?.name || item?.applicant?.fullname || "NA"}</TableCell>
                            <TableCell>{item?.email || item?.applicant?.email || "NA"}</TableCell>
                            <TableCell>{item?.phone || item?.applicant?.phoneNumber || "NA"}</TableCell>
                            <TableCell>
                                {(item?.resumeLink || item?.applicant?.profile?.resume) 
                                    ? <a href={item?.resumeLink || item?.applicant?.profile?.resume} target="_blank" className="text-blue-600" rel="noopener noreferrer">View Resume</a> 
                                    : "NA"}
                            </TableCell>
                            <TableCell>{item?.createdAt?.split("T")[0] || "NA"}</TableCell>
                            <TableCell>
                                <Popover>
                                    <PopoverTrigger>
                                        <button className='text-blue-600 underline'>View Form</button>
                                    </PopoverTrigger>
                             <PopoverContent className="w-80 text-sm space-y-2">
  <p><strong>Name:</strong> {item?.applicant?.fullname || item?.name || "NA"}</p>
  <p><strong>Email:</strong> {item?.applicant?.email || item?.email || "NA"}</p>
  <p><strong>Phone:</strong> {item?.applicant?.phoneNumber || item?.phone || "NA"}</p>
  <p><strong>Resume:</strong> {
      item?.resumeLink || item?.applicant?.profile?.resume
      ? <a href={item?.resumeLink || item?.applicant?.profile?.resume} className="text-blue-600" target="_blank" rel="noopener noreferrer">View</a>
      : "NA"
  }</p>
  <p><strong>Leetcode:</strong> {item?.leetcode || item?.applicant?.profile?.leetcode || "NA"}</p>
  <p><strong>Project:</strong> {item?.project || item?.applicant?.profile?.project || "NA"}</p>
  <p><strong>Experience:</strong> {item?.experience || item?.applicant?.profile?.experience || "NA"} years</p>
</PopoverContent>


                                </Popover>
                            </TableCell>
                            <TableCell className="float-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                    <PopoverContent className="w-32">
                                        {shortlistingStatus.map((status, index) => (
                                            <div onClick={() => statusHandler(status, item._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                <span>{status}</span>
                                            </div>
                                        ))}
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </div>
    );
}

export default ApplicantsTable;
