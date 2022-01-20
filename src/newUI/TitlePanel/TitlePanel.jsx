import React from "react";
import style from "./style.module.scss";
import { CustomButton } from "../Button/Button";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const TitlePanel = ({ primaryText, secondaryText }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <div className={style.primary}>{primaryText}</div>
        <div className={style.secondary}>{secondaryText}</div>
      </div>
      <div className={style.controls}>
        <IconButton>
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
        <CustomButton onClick={() => {}} blue width={160}>
          Редактировать
        </CustomButton>
        <CustomButton onClick={() => {}} green width={160}>
          Проверить
        </CustomButton>
      </div>
    </div>
  );
};
