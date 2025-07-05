
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/Badge";
import { X } from "lucide-react";

type Job = {
  id?: string;
  title: string;
  description: string;
  location: string;
  job_type: string | null;
  salary: string | null;
  years_experience: number | null;
  skills: string[] | null;
  is_active: boolean;
};

type JobFormProps = {
  job?: Partial<Job>;
  onSave: (job: Partial<Job>) => void;
  onCancel: () => void;
};

const JOB_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Remote"
];

const JobForm = ({ job, onSave, onCancel }: JobFormProps) => {
  const [formData, setFormData] = useState<Partial<Job>>({
    title: "",
    description: "",
    location: "",
    job_type: "",
    salary: "",
    years_experience: 0,
    skills: [],
    is_active: true,
    ...job
  });
  
  const [newSkill, setNewSkill] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    if (job) {
      setFormData({
        ...job,
        skills: job.skills || []
      });
    }
  }, [job]);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error when field is changed
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const numValue = value === "" ? null : parseInt(value, 10);
    setFormData(prev => ({ ...prev, [name]: numValue }));
  };
  
  const toggleActive = (checked: boolean) => {
    setFormData(prev => ({ ...prev, is_active: checked }));
  };
  
  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() === "") return;
    
    setFormData(prev => ({
      ...prev,
      skills: [...(prev.skills || []), newSkill.trim()]
    }));
    setNewSkill("");
  };
  
  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: (prev.skills || []).filter(s => s !== skill)
    }));
  };
  
  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.title?.trim()) {
      errors.title = "Job title is required";
    }
    
    if (!formData.description?.trim()) {
      errors.description = "Job description is required";
    }
    
    if (!formData.location?.trim()) {
      errors.location = "Location is required";
    }
    
    if (!formData.job_type) {
      errors.job_type = "Job type is required";
    }
    
    if (formData.years_experience !== null && formData.years_experience !== undefined && formData.years_experience < 0) {
      errors.years_experience = "Years of experience cannot be negative";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">
          Job Title <span className="text-red-500">*</span>
        </Label>
        <Input
          id="title"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          placeholder="e.g. Software Engineer"
          className={validationErrors.title ? "border-red-500" : ""}
        />
        {validationErrors.title && (
          <p className="text-red-500 text-sm">{validationErrors.title}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="job_type">
          Job Type <span className="text-red-500">*</span>
        </Label>
        <Select 
          value={formData.job_type || ""} 
          onValueChange={(value) => handleSelectChange("job_type", value)}
        >
          <SelectTrigger className={validationErrors.job_type ? "border-red-500" : ""}>
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>
            {JOB_TYPES.map(type => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {validationErrors.job_type && (
          <p className="text-red-500 text-sm">{validationErrors.job_type}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">
          Location <span className="text-red-500">*</span>
        </Label>
        <Input
          id="location"
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
          placeholder="e.g. New York, NY or Remote"
          className={validationErrors.location ? "border-red-500" : ""}
        />
        {validationErrors.location && (
          <p className="text-red-500 text-sm">{validationErrors.location}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="salary">
          Salary (Optional)
        </Label>
        <Input
          id="salary"
          name="salary"
          value={formData.salary || ""}
          onChange={handleChange}
          placeholder="e.g. $80,000 - $100,000"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="years_experience">
          Years of Experience <span className="text-red-500">*</span>
        </Label>
        <Input
          id="years_experience"
          name="years_experience"
          type="number"
          min="0"
          value={formData.years_experience ?? ""}
          onChange={handleNumberChange}
          placeholder="e.g. 3"
          className={validationErrors.years_experience ? "border-red-500" : ""}
        />
        {validationErrors.years_experience && (
          <p className="text-red-500 text-sm">{validationErrors.years_experience}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">
          Job Description <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Describe the job responsibilities, requirements, etc."
          rows={6}
          className={validationErrors.description ? "border-red-500" : ""}
        />
        {validationErrors.description && (
          <p className="text-red-500 text-sm">{validationErrors.description}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Skills (Optional)</Label>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            className="flex-1"
          />
          <Button 
            type="button" 
            onClick={addSkill}
            variant="outline"
            className="border-[#0098af] text-[#0098af] hover:bg-[#E6F0F5]"
          >
            Add
          </Button>
        </div>
        
        {formData.skills && formData.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.skills.map(skill => (
              <Badge key={skill} className="bg-[#E6F0F5] text-[#003C46] hover:bg-[#E6F0F5]/80">
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="ml-1 hover:text-red-600"
                >
                  <X size={12} />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Switch 
          id="is_active" 
          checked={formData.is_active}
          onCheckedChange={toggleActive}
          className="data-[state=checked]:bg-[#0098af]"
        />
        <Label htmlFor="is_active">
          Active (visible to applicants)
        </Label>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          type="submit"
          className="bg-[#0098af] text-white hover:bg-[#00b4d8]"
        >
          {job ? "Update Job" : "Create Job"}
        </Button>
      </div>
    </form>
  );
};

export default JobForm;
