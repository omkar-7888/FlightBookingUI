import { render,screen,fireEvent, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";


describe("Testing Login ",()=>{
    it("Login", async ()=>{
        render(<BrowserRouter><Login/></BrowserRouter>);

        fireEvent.change(screen.getByTestId('Email id'),{target:{value:"amit@gmail.com"}})
        fireEvent.change(screen.getByTestId('Password'),{target:{value:"Amit@123"}})

    })
})