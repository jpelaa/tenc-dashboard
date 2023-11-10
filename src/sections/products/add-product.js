import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { PRODUCT_FORM_FIELDS, PRODUCT_FORM_ORDER } from "src/static/products";

export const AddProduct = (props) => {
  const { open, handleClose } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-title">Product</DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <Grid container spacing={2}>
          {Object.keys(PRODUCT_FORM_FIELDS).map((data) => {
            return (
              <Grid item key={data} xs={12} sx={{ my: 1, px: 0.25, py: 0.5 }}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-error">
                    {PRODUCT_FORM_FIELDS[data].labelName}
                  </InputLabel>
                  <Input fullWidth id="component-error" aria-describedby="component-error-text" />
                </FormControl>
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Add Product
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddProduct.propTypes = {};
