// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, StarFactOpinion, StarDimVote, StarDimUser, StarDimPost } = initSchema(schema);

export {
  Todo,
  StarFactOpinion,
  StarDimVote,
  StarDimUser,
  StarDimPost
};