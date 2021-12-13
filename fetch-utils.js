const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// need all dogs for the list page
export async function getDogs() {
    // from the dogs table, select all items
    const response = await client
        // name of the table Dani made in supabase
        .from('dogs')
        .select();
    // and return the response (checking for errors) 
    return checkError(response);
}

// need a single 
export async function getDog(id) {
    // from the dogs table, select a single dog who has the matching id
    const response = await client
        .from('dogs')
        .select()
        .match({ id: id })
        .single();

    // and return the response (checking for errors)
    return checkError(response);    
}

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}