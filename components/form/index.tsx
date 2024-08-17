"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import PolicyPopover from "@/components/policyPopover";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import { saveIntoDB } from "@/lib/lead";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be valid.",
  }),
});

export function ProfileForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
    const res = await saveIntoDB(values.email);

    console.log(res);
    if (res.status === 200) {
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon",
      });
    } else {
      toast({
        title: "Uh oh there was a problem",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
      throw new Error("error saving contact info");
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-[90%] lg:w-[80%] mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    {...field}
                    type="email"
                    className="h-14"
                  />
                </FormControl>
                <FormDescription>
                  <Popover>
                    <span className="flex items-center ">
                      I agree to the
                      <PopoverTrigger className="ml-1 text-blue-500">
                        privacy policy
                      </PopoverTrigger>
                    </span>
                    <PopoverContent
                      className="h-[500px] w-[500px] overflow-scroll py-5"
                      side="right"
                    >
                      <PolicyPopover />
                    </PopoverContent>
                  </Popover>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-6 rounded-none px-12 bg-gradient-to-r text-black h-14 cursor-pointer from-orange-600 to-purple-600 text-white text-lg hover:from-black hover:to-black hover:border-white hover:border-2"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
