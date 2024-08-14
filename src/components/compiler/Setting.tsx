import { Button, Select } from "@radix-ui/themes";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setSettingData } from "../../store/others/codeCompiler/codeCompilerSettingSlice";
import Input from "../inputs/Input";
import SelectInput from "../inputs/SelectInput";
import { CompilerTypes } from "./constants";

interface IoSettings {
  className?: string;
}

function Setting({ className }: IoSettings) {
  const { currentCompilerType, openAIKey } = useAppSelector(
    (state) => state.codeCompilerSettingSlice,
  );

  const [settingInput, setSettingInput] = useState({
    currentCompilerType,
    openAIKey,
  });

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(setSettingData(settingInput));
  };

  return (
    <div
      className={`${className} flex flex-col gap-3 text-nowrap bg-white p-5`}
    >
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium" htmlFor="compilerType">
          Compiler Type :{" "}
        </label>
        <SelectInput
          onValueChange={(value) =>
            setSettingInput((prev) => ({ ...prev, currentCompilerType: value }))
          }
          defaultValue={currentCompilerType}
        >
          {Object.values(CompilerTypes).map((type) => (
            <Select.Item key={type} value={type}>
              {type}
            </Select.Item>
          ))}
        </SelectInput>
      </div>

      <Input
        onChange={(e) =>
          setSettingInput((prev) => ({ ...prev, openAIKey: e.target.value }))
        }
        label="OpenAI Key :"
        placeholder="Add your key here..."
      />
      <Button onClick={onSave} className="w-28 cursor-pointer self-end">
        Save
      </Button>
    </div>
  );
}

export default Setting;
