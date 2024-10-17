import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/packageDetails";

interface loaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader ({ params }: loaderArgs): Promise<DetailsLoaderResult> {
  // console.log(props)
  const {name } = params;
  
  if (!name){
    throw new Error('Name must be provided')
  }

  const details = await getPackage(name)

  return {
    details
  }
}