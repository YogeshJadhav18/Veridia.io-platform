import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";

import { setAllAppliedJobs } from "@/redux/jobSlice";


const JobApplicationForm = ({ open, setOpen, jobId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { singleJob } = useSelector((store) => store.job);
  
  const [formData, setFormData] = useState({
    name: user?.fullname || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
    resumeLink: user?.profile?.resume || "",
    leetcode: "",
    project: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${APPLICATION_API_END_POINT}/apply/${jobId}`, formData, {
        withCredentials: true,
      });

    if (res.data.success) {
  toast.success("Application submitted successfully!");
  setOpen(false);

  const newApplication = res.data.application; // backend se aaya hua
  const updatedSingleJob = {
    ...singleJob,
    applications: [...singleJob.applications, { applicant: user?._id }],
  };

  // ✅ 1. Update single job
  dispatch(setSingleJob(updatedSingleJob));

  // ✅ 2. Update applied jobs list in Redux
  dispatch(setAllAppliedJobs(prev => [...(prev || []), newApplication]));
}

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Apply for this Job</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-3">
          <div>
            <Label>Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label>Phone</Label>
            <Input name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <Label>Resume Link</Label>
            <Input name="resumeLink" value={formData.resumeLink} onChange={handleChange} required />
          </div>
          <div>
            <Label>LeetCode Profile</Label>
            <Input name="leetcode" value={formData.leetcode} onChange={handleChange} />
          </div>
          <div>
            <Label>Project Link</Label>
            <Input name="project" value={formData.project} onChange={handleChange} />
          </div>
          <div>
            <Label>Experience (in years)</Label>
            <Input name="experience" value={formData.experience} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full bg-[#7209b7] hover:bg-[#5f32ad]">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationForm;
