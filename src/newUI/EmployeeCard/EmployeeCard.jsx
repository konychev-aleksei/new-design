import React from "react";
import style from "./style.module.scss";
import { CustomButton } from "../Button/Button";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StarRateIcon from "@mui/icons-material/StarRate";

export const EmployeeCard = ({ name = "Канаков Сергей Владимирович" }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <img
          className={style.profile}
          src={
            "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          }
          alt=""
        />
        <div className={style.name}>{name}</div>
        <div className={style.rating}>
          <div className={style.star}>
              <StarRateIcon />
              4.9
          </div>
          <div className={style.experience}>Опыт 5 лет</div>
        </div>
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
