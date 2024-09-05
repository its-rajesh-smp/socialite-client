import { useMutation, useQuery } from "@apollo/client";
import Input from "../../../../../components/inputs/Input";
import Chip from "../../../../../components/others/Chip";
import {
  CREATE_A_TASK_TAG,
  GET_ALL_TASK_TAGS,
} from "../../../../../graphql/practice/taskTag.graphql";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import {
  addToAllTaskTag,
  addToCurrentTaskTag,
  deleteACurrentTaskTag,
  setAllTaskTags,
} from "../../../../../store/practiceSetTask/taskTagSlice";
import { ITaskTag } from "../../../../../types/practice";

function TaskTag() {
  const isEditing = useAppSelector(
    (state) => state.practiceTaskContentActionSlice.isContentEditable,
  );
  const { currentTaskTags, allTaskTags } = useAppSelector(
    (state) => state.taskTagSlice,
  );

  const [mutateCreateTaskTag] = useMutation(CREATE_A_TASK_TAG);
  const dispatch = useAppDispatch();

  /**
   * get all tags of an user
   */
  useQuery(GET_ALL_TASK_TAGS, {
    onCompleted(data) {
      dispatch(setAllTaskTags(data.getTags));
    },
  });

  /**
   * function to handle chip click
   * @param newTag - tag object
   * @returns void
   */
  const onChipClick = async (newTag: ITaskTag) => {
    if (!isEditing) return;
    const isPresent = currentTaskTags.find((tag) => tag.name === newTag.name);
    if (!isPresent) {
      dispatch(addToCurrentTaskTag(newTag));
    }
  };

  /**
   * function to handle tag change
   * detect created and deleted tags
   * if created, save tag on db
   * @param updatedTags
   */
  const onTagChange = async (updatedTags: string[]) => {
    if (!isEditing) return;
    const currentTagNames = currentTaskTags.map((tag) => tag.name);

    // Detect deleted tags
    const deletedTags = currentTagNames.filter(
      (tag) => !updatedTags.includes(tag),
    );
    if (deletedTags.length > 0) {
      dispatch(deleteACurrentTaskTag(deletedTags[0]));
    }

    // Detect created tags
    const createdTags = updatedTags.filter(
      (tag) => !currentTagNames.includes(tag),
    );
    if (createdTags.length > 0) {
      const response = await saveTagOnDB(createdTags[0]);
      dispatch(addToCurrentTaskTag(response?.data?.createATaskTag));
      dispatch(addToAllTaskTag(response?.data?.createATaskTag));
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
      <div className="flex flex-wrap gap-2">
        {allTaskTags.map((tag) => (
          <Chip
            className={`${!isEditing ? "" : "cursor-pointer"}`}
            onClick={() => onChipClick(tag)}
            key={tag.id}
            text={tag.name}
          />
        ))}
      </div>
      <Input
        disabled={!isEditing}
        tagValue={currentTaskTags.map((tag) => tag.name)}
        onChange={onTagChange}
        inputType="tag"
      />
    </div>
  );
}

export default TaskTag;
