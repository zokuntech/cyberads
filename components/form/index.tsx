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
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
    toast({
      title: "Be on the look out",
      description: "There was a problem with your request.",
    });
  }

  return (
    <>
      {isSubmitted ? (
        <div className="text-white mt-8 text-left text-4xl w-[80%]">
          Thank you! We'll be in touch with you soon
        </div>
      ) : (
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
              onClick={() => {}}
              className="mt-6 rounded-none px-12 bg-gradient-to-r text-black h-14 cursor-pointer from-orange-600 to-purple-600 text-white text-lg hover:from-black hover:to-black hover:border-white hover:border-2"
            >
              Submit
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
