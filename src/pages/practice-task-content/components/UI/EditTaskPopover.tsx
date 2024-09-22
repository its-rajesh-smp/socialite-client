import Input from "@/components/inputs/Input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings2Icon } from "lucide-react";
import React from "react";

function EditTaskPopover() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings2Icon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-80">
          <div className="space-y-4">
            <h2 className="font-semibold">Edit Task</h2>
            <div className="space-y-2">
              <Label htmlFor="edit-title">Title</Label>
              <Input placeholder="Title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-tag">Tag</Label>
              <Select>
                <SelectTrigger id="edit-tag">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="React">React</SelectItem>
                  <SelectItem value="JavaScript">JavaScript</SelectItem>
                  <SelectItem value="CSS">CSS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-difficulty">Difficulty</Label>
              <Select>
                <SelectTrigger id="edit-difficulty">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Save Changes</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default EditTaskPopover;
