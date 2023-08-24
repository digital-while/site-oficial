import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate, useParams } from "react-router-dom";

export default function SelectComponent() {
    const { userInfo } = useContext(UserContext);
    const navigate = useNavigate();
    const { product } = useParams();

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value as string);
        console.log(product);
        navigate(`/${event.target.value}`);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            /* required=true */
            onChange={handleChange}
            >
            {userInfo.controlPanel.productEdit.map((productCategory, index) => {
                if (product != productCategory.urlName) {
                return (
                    <MenuItem
                    key={index}
                    value={`product/${productCategory.urlName}`}
                    >
                    {productCategory.title}
                    </MenuItem>
                );
                }
            })}
            </Select>
        </FormControl>
        </Box>
    );
}
