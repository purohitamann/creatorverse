import { createClient } from "@supabase/supabase-js";

const URL = process.env.REACT_APP_SUPABASE_URL;
const API = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(URL, API);

export async function addItem(item) {
  const yt = item.youtube;
  const inst = item.instagram;
  const tw = item.twitter;
  const url = [yt, inst, tw];
  const { data, error } = await supabase
    .from("creators")
    .upsert({
      name: item.name,
      imageURL: item.imageUrl,
      description: item.description,
      url: url,
    })
    .select();
  if (error) {
    console.error("Error inserting item: ", error);
    return null;
  }

  return data;
}

export async function showAllCreators() {
  let { data: creators, error } = await supabase.from("creators").select("*");
  if (error) {
    console.error("Error fetching creators: ", error);
    return null;
  }
  return creators;
}

export async function getCreatorById(id) {
  let { data: creator, error } = await supabase
    .from("creators")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching creator: ", error);
    return null;
  }
  return creator;
}

export async function updateCreator(id, item) {
  const yt = item.youtube;
  const inst = item.instagram;
  const tw = item.twitter;
  const url = [yt, inst, tw];
  const { data, error } = await supabase
    .from("creators")
    .update({
      name: item.name,
      imageURL: item.imageUrl,
      description: item.description,
      url: url,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error updating creator: ", error);
    return null;
  }
  return data;
}

export async function deleteCreator(id) {
  const { data: creator, error } = await supabase
    .from("creators")
    .delete()
    .eq("id", id);
  if (error) {
    console.error("Error fetching creator: ", error);
    return null;
  }
  return creator;
}
