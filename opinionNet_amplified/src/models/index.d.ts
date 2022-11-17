import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarFactOpinionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimVoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarDimPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerStarFactOpinion = {
  readonly id: string;
  readonly UserKey: string;
  readonly PostKey: string;
  readonly VoteKey: string;
  readonly Post_exp_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStarFactOpinion = {
  readonly id: string;
  readonly UserKey: string;
  readonly PostKey: string;
  readonly VoteKey: string;
  readonly Post_exp_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StarFactOpinion = LazyLoading extends LazyLoadingDisabled ? EagerStarFactOpinion : LazyStarFactOpinion

export declare const StarFactOpinion: (new (init: ModelInit<StarFactOpinion, StarFactOpinionMetaData>) => StarFactOpinion) & {
  copyOf(source: StarFactOpinion, mutator: (draft: MutableModel<StarFactOpinion, StarFactOpinionMetaData>) => MutableModel<StarFactOpinion, StarFactOpinionMetaData> | void): StarFactOpinion;
}

type EagerStarDimVote = {
  readonly id: string;
  readonly Vote_choice?: number | null;
  readonly Vote_choice_remove?: number | null;
  readonly Vote_last_applied?: string | null;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStarDimVote = {
  readonly id: string;
  readonly Vote_choice?: number | null;
  readonly Vote_choice_remove?: number | null;
  readonly Vote_last_applied?: string | null;
  readonly StarFactOpinion: AsyncCollection<StarFactOpinion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StarDimVote = LazyLoading extends LazyLoadingDisabled ? EagerStarDimVote : LazyStarDimVote

export declare const StarDimVote: (new (init: ModelInit<StarDimVote, StarDimVoteMetaData>) => StarDimVote) & {
  copyOf(source: StarDimVote, mutator: (draft: MutableModel<StarDimVote, StarDimVoteMetaData>) => MutableModel<StarDimVote, StarDimVoteMetaData> | void): StarDimVote;
}

type EagerStarDimUser = {
  readonly id: string;
  readonly User_age?: string | null;
  readonly User_gender?: string | null;
  readonly User_institution?: string | null;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStarDimUser = {
  readonly id: string;
  readonly User_age?: string | null;
  readonly User_gender?: string | null;
  readonly User_institution?: string | null;
  readonly StarFactOpinion: AsyncCollection<StarFactOpinion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StarDimUser = LazyLoading extends LazyLoadingDisabled ? EagerStarDimUser : LazyStarDimUser

export declare const StarDimUser: (new (init: ModelInit<StarDimUser, StarDimUserMetaData>) => StarDimUser) & {
  copyOf(source: StarDimUser, mutator: (draft: MutableModel<StarDimUser, StarDimUserMetaData>) => MutableModel<StarDimUser, StarDimUserMetaData> | void): StarDimUser;
}

type EagerStarDimPost = {
  readonly id: string;
  readonly Post_text?: string | null;
  readonly Post_posting_date?: string | null;
  readonly Post_connotation_header?: string | null;
  readonly StarFactOpinion?: (StarFactOpinion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStarDimPost = {
  readonly id: string;
  readonly Post_text?: string | null;
  readonly Post_posting_date?: string | null;
  readonly Post_connotation_header?: string | null;
  readonly StarFactOpinion: AsyncCollection<StarFactOpinion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StarDimPost = LazyLoading extends LazyLoadingDisabled ? EagerStarDimPost : LazyStarDimPost

export declare const StarDimPost: (new (init: ModelInit<StarDimPost, StarDimPostMetaData>) => StarDimPost) & {
  copyOf(source: StarDimPost, mutator: (draft: MutableModel<StarDimPost, StarDimPostMetaData>) => MutableModel<StarDimPost, StarDimPostMetaData> | void): StarDimPost;
}