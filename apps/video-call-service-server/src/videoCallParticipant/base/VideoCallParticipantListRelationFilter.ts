/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VideoCallParticipantWhereInput } from "./VideoCallParticipantWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VideoCallParticipantListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VideoCallParticipantWhereInput,
  })
  @ValidateNested()
  @Type(() => VideoCallParticipantWhereInput)
  @IsOptional()
  @Field(() => VideoCallParticipantWhereInput, {
    nullable: true,
  })
  every?: VideoCallParticipantWhereInput;

  @ApiProperty({
    required: false,
    type: () => VideoCallParticipantWhereInput,
  })
  @ValidateNested()
  @Type(() => VideoCallParticipantWhereInput)
  @IsOptional()
  @Field(() => VideoCallParticipantWhereInput, {
    nullable: true,
  })
  some?: VideoCallParticipantWhereInput;

  @ApiProperty({
    required: false,
    type: () => VideoCallParticipantWhereInput,
  })
  @ValidateNested()
  @Type(() => VideoCallParticipantWhereInput)
  @IsOptional()
  @Field(() => VideoCallParticipantWhereInput, {
    nullable: true,
  })
  none?: VideoCallParticipantWhereInput;
}
export { VideoCallParticipantListRelationFilter as VideoCallParticipantListRelationFilter };
