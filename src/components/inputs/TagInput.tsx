import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  CREATE_A_TASK_TAG,
  GET_ALL_TASK_TAGS,
} from "../../graphql/practice/taskTag.graphql";
import { ITaskTag } from "../../types/practice";
import { getTagColorUsingTagName } from "../../utils/color";
import Input from "./Input";
import { Badge } from "../ui/badge";

interface ITagInputProps {
  tags: ITaskTag[];
  label?: string;
  setTags: React.Dispatch<React.SetStateAction<ITaskTag[]>>;
  placeholder?: string;
}

function TagInput({ tags, setTags, label, placeholder }: ITagInputProps) {
  const [existingTags, setExistingTags] = useState<ITaskTag[]>([]);
  const [mutateCreateTaskTag] = useMutation(CREATE_A_TASK_TAG);

  /**
   * get all tags of an user
   */
  useQuery(GET_ALL_TASK_TAGS, {
    onCompleted(data) {
      setExistingTags(data.getTags);
    },
  });

  /**
   * function to handle chip click
   * @param newTag - tag object
   * @returns void
   */
  const onChipClick = async (newTag: ITaskTag) => {
    const isPresent = tags.find((tag) => tag.name === newTag.name);
    if (!isPresent) {
      setTags([...tags, newTag]);
    }
  };

  /**
   * function to handle tag change
   * detect created and deleted tags
   * if created, save tag on db
   * @param updatedTags
   */
  const onTagChange = async (updatedTags: string[]) => {
    const currentTagNames = tags.map((tag) => tag.name);

    // Detect deleted tags
    const deletedTags = currentTagNames.filter(
      (tag) => !updatedTags.includes(tag),
    );
    if (deletedTags.length > 0) {
      setTags(tags.filter((tag) => !deletedTags.includes(tag.name)));
    }

    // Detect created tags
    const createdTags = updatedTags.filter(
      (tag) => !currentTagNames.includes(tag),
    );
    if (createdTags.length > 0) {
      const response = await saveTagOnDB(createdTags[0]);
      setTags([...tags, response?.data?.createATaskTag]);
      setExistingTags([...existingTags, response?.data?.createATaskTag]);
    }
  };

  /**
   * function to store tag on db
   * @param name
   */
  const saveTagOnDB = async (name: string) => {
    return await mutateCreateTaskTag({
      variables: {
        data: {
          name,
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="flex flex-wrap gap-2">
        {existingTags.map((tag) => {
          const color = getTagColorUsingTagName(tag.name);
          return (
            <Badge
              className={`cursor-pointer ${color}`}
              onClick={() => onChipClick(tag)}
              key={tag.id}
            >
              {tag.name}
            </Badge>
          );
        })}
      </div>
      <Input
        placeholder={placeholder}
        inputType="tag"
        tagValue={tags.map((tag) => tag.name)}
        onChange={onTagChange}
      />
    </div>
  );
}

export default TagInput;
