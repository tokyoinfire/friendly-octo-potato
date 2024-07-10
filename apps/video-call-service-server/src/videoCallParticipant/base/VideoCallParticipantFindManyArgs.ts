/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VideoCallParticipantWhereInput } from "./VideoCallParticipantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VideoCallParticipantOrderByInput } from "./VideoCallParticipantOrderByInput";

@ArgsType()
class VideoCallParticipantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VideoCallParticipantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VideoCallParticipantWhereInput, { nullable: true })
  @Type(() => VideoCallParticipantWhereInput)
  where?: VideoCallParticipantWhereInput;

  @ApiProperty({
    required: false,
    type: [VideoCallParticipantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VideoCallParticipantOrderByInput], { nullable: true })
  @Type(() => VideoCallParticipantOrderByInput)
  orderBy?: Array<VideoCallParticipantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VideoCallParticipantFindManyArgs as VideoCallParticipantFindManyArgs };
