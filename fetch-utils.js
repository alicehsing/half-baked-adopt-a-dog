const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// need all dogs for the list page
export async function getDogs() {
    // from the dogs table, select all items
    const response = await client
        // name of the table Dani made in supabase
        .from('dogs')
        .select()
        .order('id');
    // and return the response (checking for errors) 
    return checkError(response);
}

// need a single 
export async function getDog(id) {
    const response = await client
        .from('dogs')
        .select()
        .match({ id: id })
        .single();

    return checkError(response);    
}

// it takes in a response, and sucks out(destructures) a data and an error property
function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    // then it asks: is there error?
    //if so, this function returns the error
    // if there are no error, this function returns data
    return error ? console.error(error) : data;
}