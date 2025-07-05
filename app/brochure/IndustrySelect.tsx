"use client";

// This component shows the industry dropdown in the form
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

export default function IndustrySelect() {
  // Set up the form
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>

            {/* Label for the dropdown */}
            <FormLabel className="text-white">Select Industry *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>

                {/* Dropdown trigger */}
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="- Select -" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>

                {/* List all industries and their subcategories */}
                {BROCHURE_CONSTANTS.INDUSTRIES.map((group) => (
                  <div key={group.category}>

                    {/* Category header (not clickable) */}
                    <div className="px-2 py-1 text-sm font-semibold text-blue-700 bg-gray-100 cursor-default">
                      {group.category}
                    </div>

                    {/* Subcategory options */}
                    {group.subcategories.map((subcategory) => (
                      <SelectItem key={subcategory} value={subcategory}>
                        {subcategory}
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}