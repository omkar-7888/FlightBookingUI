import { render,screen,fireEvent,waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import SearchFlight from "./SearchFlight";

describe("Testing Search ",()=>{
    it("Search",async ()=>{
        render(<BrowserRouter><SearchFlight/></BrowserRouter>);

        fireEvent.change(screen.getByTestId('Enter City Name'),{target:{value:"Mumbai"}})
        fireEvent.change(screen.getByTestId('Enter City Name To'),{target:{value:"Bangalore"}})
            fireEvent.click(screen.getByTestId('submit'))
    });

})