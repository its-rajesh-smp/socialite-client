import { FaRegEye } from "react-icons/fa";
import { IoSettings, IoTerminalOutline } from "react-icons/io5";
import { MdDescription, MdFileCopy } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { GiPaper } from "react-icons/gi";

export const PreviewIndex_Right = {
  PREVIEW: { id: 0, name: "Preview", icon: <FaRegEye /> },
  CONSOLE: { id: 1, name: "Console", icon: <IoTerminalOutline /> },
  TESTS: { id: 2, name: "Tests", icon: <BiTestTube /> },
};

export const PreviewIndex_Left = {
  FILE_MANAGER: { id: 0, name: "File Manager", icon: <MdFileCopy /> },
  DESCRIPTION: { id: 1, name: "Description", icon: <MdDescription /> },
  NOTE: { id: 2, name: "Note", icon: <GiPaper /> },
  SETTING: { id: 99, name: "Settings", icon: <IoSettings /> },
};

export const CompilerTypes = {
  static: "static",
  nextjs: "nextjs",
  react: "react",
  node: "node",
  "react-ts": "react-ts",
};
