 'react';
import SearchIcon from "@mui/icons-material/Search";
import { Search,SearchIconWrapper,StyledInputBase } from "../SearchGlobal/style";

const SearchMessages = () => {
    return (
        <Search
            sx={{
                '& .MuiInputBase-root': {
                    border: 1,
                    borderColor: 'divider',
                    backgroundColor: theme => theme.palette.background.paper,
                }
            }}
        >
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Search messages..."
                inputProps={{'aria-label': 'search'}}
            />
        </Search>
    );
};

export default SearchMessages;