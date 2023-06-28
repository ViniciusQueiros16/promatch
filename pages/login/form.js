import React, { Fragment } from "react";
import clsx from "clsx";
import { Link } from "next/link";
import {
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Button,
  FormControl,
  Checkbox,
} from "@mui/material";
import { styled } from '@mui/system';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from '@mui/icons-material/Person';


const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

const LivePreviewExample = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // form 2
  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  return (
    <Fragment>
      <div maxWidth="lg">
        <div className="bg-secondary border-0">
          <div className="card-header d-block bg-white pb-5 pt-4">
            <div className="text-muted mb-3 text-center">
              <span>Sign in with</span>
            </div>
            <div className="text-center">
              <Button variant="outlined" className="text-facebook mr-2">
                <span className="btn-wrapper--icon">
                  <PersonIcon icon={["fab", "facebook"]} />
                </span>
                <span className="btn-wrapper--label">Facebook</span>
              </Button>
              <Button variant="outlined" className="text-twitter ml-2">
                <span className="btn-wrapper--icon">
                  <PersonIcon icon={["fab", "twitter"]} />
                </span>
                <span className="btn-wrapper--label">Twitter</span>
              </Button>
            </div>
          </div>
          <div className="card-body px-lg-5 py-lg-5">
            <div className="text-muted mb-4 text-center">
              <span>Or sign in with credentials</span>
            </div>
            <form>
              <div className="form-group mb-3">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <div>
                      <PersonIcon icon={["far", "envelope"]} />
                    </div>
                  </div>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                  >
                    <InputLabel htmlFor="standard-adornment-password">
                      Email
                    </InputLabel>
                    <Input
                      id="standard-adornment-weight"
                      value={values.weight}
                      onChange={handleChange("weight")}
                    />
                  </FormControl>
                </div>
              </div>
              <FormControl>
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <div>
                      <PersonIcon icon={["fas", "unlock-alt"]} />
                    </div>
                  </div>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                  >
                    <InputLabel htmlFor="standard-adornment-password">
                      Senha
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
              </FormControl>
              <div className="w-100">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked1}
                      onChange={handleChange1}
                      value="checked1"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </div>
              <div className="text-center">
                <Button
                  to="/Contractors"
                  component={Link}
                  size="large"
                  color="primary"
                  variant="contained"
                  className="m-2 px-5 py-3"
                  title="View Carolina React Admin Dashboard with Material-UI Free Live Preview"
                >
                  <span className="btn-wrapper--label">Login</span>
                  <span className="btn-wrapper--icon">
                    <PersonIcon icon={["fas", "arrow-right"]} />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
