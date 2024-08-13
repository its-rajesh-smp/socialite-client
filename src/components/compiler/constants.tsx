import { FaRegEye } from "react-icons/fa";
import { IoTerminalOutline } from "react-icons/io5";
import { MdFileCopy } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

export const PreviewIndex_Right = {
  PREVIEW: { id: 0, name: "Preview", icon: <FaRegEye /> },
  CONSOLE: { id: 1, name: "Console", icon: <IoTerminalOutline /> },
  TESTS: { id: 2, name: "Tests", icon: <BiTestTube /> },
};

export const PreviewIndex_Left = {
  FILE_MANAGER: { id: 0, name: "File Manager", icon: <MdFileCopy /> },
};
