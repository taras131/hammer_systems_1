import table_1 from "../assets/furniture/table_1.jpg";
import table_2 from "../assets/furniture/table_2.jpg";
import table_2_rotate from "../assets/furniture/table_2_rotate.jpg";
import wall_2 from "../assets/furniture/wall_2.jpg";
import wall_2_rotate from "../assets/furniture/wall_2_rotate.jpg";
import wall_1 from "../assets/furniture/wall_1.jpg";
import wall_1_rotate from "../assets/furniture/wall_1_rotate.jpg";
import wall_with_door from "../assets/furniture/wall_with_door.jpg";
import wall_with_door_rotate from "../assets/furniture/wall_with_door_rotate.jpg";

export const startElements = [
    {
        id: 0,
        top: 0,
        left: 0,
        title: 'Стол № 1',
        width: 90,
        height: 90,
        color: "blue",
        isRotate: false,
        img: {noRotate: table_1, rotate: table_1}
    },
    {
        id: 1,
        top: 0,
        left: 0,
        title: 'Стол № 2',
        width: 135,
        height: 90,
        color: "red",
        isRotate: false,
        img: {noRotate: table_2, rotate: table_2_rotate}
    },
    {
        id: 2,
        top: 0,
        left: 0,
        title: 'Стена № 2',
        width: 20,
        height: 50,
        color: "black",
        isRotate: false,
        img: {noRotate: wall_2, rotate: wall_2_rotate}
    },
    {
        id: 3,
        top: 0,
        left: 0,
        title: 'Стена № 1',
        width: 20,
        height: 100,
        color: "black",
        isRotate: false,
        img: {noRotate: wall_1, rotate: wall_1_rotate}
    },
    {
        id: 4,
        top: 0,
        left: 0,
        title: 'Стена c дверью',
        width: 20,
        height: 100,
        color: "black",
        isRotate: false,
        img: {noRotate: wall_with_door, rotate: wall_with_door_rotate}
    },
]