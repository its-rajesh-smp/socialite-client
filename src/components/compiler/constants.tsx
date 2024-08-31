import { BiTestTube } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoSettings, IoTerminalOutline } from "react-icons/io5";
import { MdFileCopy, MdOutlineEditNote } from "react-icons/md";

export enum CompilerTypes {
  static = "static",
  react = "react",
  node = "node",
  reactTS = "react-ts",
}

export const rightPanelTabs = {
  preview: { id: 0, name: "Preview", icon: <FaRegEye /> },
  console: { id: 1, name: "Console", icon: <IoTerminalOutline /> },
  test: { id: 2, name: "Test", icon: <BiTestTube /> },
};

export const leftPanelTabs = {
  fileManager: { id: 0, name: "File Manager", icon: <MdFileCopy /> },
  // description: { id: 1, name: "Description", icon: <MdDescription /> },
  note: { id: 2, name: "Note", icon: <MdOutlineEditNote /> },
  setting: { id: 99, name: "Setting", icon: <IoSettings /> },
};

export const DEFAULT_PREVIEW_SIZE = 35;
export const COLLAPSE_PREVIEW_SIZE = 5;
