import { render,screen,fireEvent, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import DeleteFlight from "./DeleteFlight";


describe("Testing DeleteFlight",()=>{
    it("DeleteFlight",async ()=>{
        render(<BrowserRouter><DeleteFlight/></BrowserRouter>);

       
        fireEvent.change(screen.getByTestId('Enter Flight Id'),{target:{value:'171I'}})

            fireEvent.click(screen.getByTestId('submit'))
    })
})