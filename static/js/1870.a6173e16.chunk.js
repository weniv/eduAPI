"use strict";(self.webpackChunkeduapi=self.webpackChunkeduapi||[]).push([[1870],{1870:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var o=[Object.freeze({displayName:"Protocol Buffer 3",fileTypes:["proto"],name:"proto",patterns:[{include:"#comments"},{include:"#syntax"},{include:"#package"},{include:"#import"},{include:"#optionStmt"},{include:"#message"},{include:"#enum"},{include:"#service"}],repository:{comments:{patterns:[{begin:"/\\*",end:"\\*/",name:"comment.block.proto"},{begin:"//",end:"$\\n?",name:"comment.line.double-slash.proto"}]},constants:{match:"\\b(true|false|max|[A-Z_]+)\\b",name:"constant.language.proto"},enum:{begin:"(enum)(\\s+)([A-Za-z][A-Za-z0-9_]*)(\\s*)(\\{)?",beginCaptures:{1:{name:"keyword.other.proto"},3:{name:"entity.name.class.proto"}},end:"\\}",patterns:[{include:"#reserved"},{include:"#optionStmt"},{include:"#comments"},{begin:"([A-Za-z][A-Za-z0-9_]*)\\s*(=)\\s*(0[xX][0-9a-fA-F]+|[0-9]+)",beginCaptures:{1:{name:"variable.other.proto"},2:{name:"keyword.operator.assignment.proto"},3:{name:"constant.numeric.proto"}},end:"(;)",endCaptures:{1:{name:"punctuation.terminator.proto"}},patterns:[{include:"#fieldOptions"}]}]},field:{begin:"\\s*(optional|repeated|required)?\\s*\\b([\\w.]+)\\s+(\\w+)\\s*(=)\\s*(0[xX][0-9a-fA-F]+|[0-9]+)",beginCaptures:{1:{name:"storage.modifier.proto"},2:{name:"storage.type.proto"},3:{name:"variable.other.proto"},4:{name:"keyword.operator.assignment.proto"},5:{name:"constant.numeric.proto"}},end:"(;)",endCaptures:{1:{name:"punctuation.terminator.proto"}},patterns:[{include:"#fieldOptions"}]},fieldOptions:{begin:"\\[",end:"\\]",patterns:[{include:"#constants"},{include:"#number"},{include:"#string"},{include:"#subMsgOption"},{include:"#optionName"}]},ident:{match:"[A-Za-z][A-Za-z0-9_]*",name:"entity.name.class.proto"},import:{captures:{1:{name:"keyword.other.proto"},2:{name:"keyword.other.proto"},3:{name:"string.quoted.double.proto.import"},4:{name:"punctuation.terminator.proto"}},match:'\\s*(import)\\s+(weak|public)?\\s*("[^"]+")\\s*(;)'},kv:{begin:"(\\w+)\\s*(:)",beginCaptures:{1:{name:"keyword.other.proto"},2:{name:"punctuation.separator.key-value.proto"}},end:"(;)|,|(?=[}/_a-zA-Z])",endCaptures:{1:{name:"punctuation.terminator.proto"}},patterns:[{include:"#constants"},{include:"#number"},{include:"#string"},{include:"#subMsgOption"}]},mapfield:{begin:"\\s*(map)\\s*(<)\\s*([\\w.]+)\\s*,\\s*([\\w.]+)\\s*(>)\\s+(\\w+)\\s*(=)\\s*(\\d+)",beginCaptures:{1:{name:"storage.type.proto"},2:{name:"punctuation.definition.typeparameters.begin.proto"},3:{name:"storage.type.proto"},4:{name:"storage.type.proto"},5:{name:"punctuation.definition.typeparameters.end.proto"},6:{name:"variable.other.proto"},7:{name:"keyword.operator.assignment.proto"},8:{name:"constant.numeric.proto"}},end:"(;)",endCaptures:{1:{name:"punctuation.terminator.proto"}},patterns:[{include:"#fieldOptions"}]},message:{begin:"(message|extend)(\\s+)([A-Za-z_][A-Za-z0-9_.]*)(\\s*)(\\{)?",beginCaptures:{1:{name:"keyword.other.proto"},3:{name:"entity.name.class.message.proto"}},end:"\\}",patterns:[{include:"#reserved"},{include:"$self"},{include:"#enum"},{include:"#optionStmt"},{include:"#comments"},{include:"#oneof"},{include:"#field"},{include:"#mapfield"}]},method:{begin:"(rpc)\\s+([A-Za-z][A-Za-z0-9_]*)",beginCaptures:{1:{name:"keyword.other.proto"},2:{name:"entity.name.function"}},end:"\\}|(;)",endCaptures:{1:{name:"punctuation.terminator.proto"}},patterns:[{include:"#comments"},{include:"#optionStmt"},{include:"#rpcKeywords"},{include:"#ident"}]},number:{match:"\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b",name:"constant.numeric.proto"},oneof:{begin:"(oneof)\\s+([A-Za-z][A-Za-z0-9_]*)\\s*\\{?",beginCaptures:{1:{name:"keyword.other.proto"},2:{name:"variable.other.proto"}},end:"\\}",patterns:[{include:"#optionStmt"},{include:"#comments"},{include:"#field"}]},optionName:{captures:{1:{name:"support.other.proto"},2:{name:"support.other.proto"},3:{name:"support.other.proto"}},match:"(\\w+|\\(\\w+(\\.\\w+)*\\))(\\.\\w+)*"},optionStmt:{begin:"(option)\\s+(\\w+|\\(\\w+(\\.\\w+)*\\))(\\.\\w+)*\\s*(=)",beginCaptures:{1:{name:"keyword.other.proto"},2:{name:"support.other.proto"},3:{name:"support.other.proto"},4:{name:"support.other.proto"},5:{name:"keyword.operator.assignment.proto"}},end:"(;)",endCaptures:{1:{name:"punctuation.terminator.proto"}},patterns:[{include:"#constants"},{include:"#number"},{include:"#string"},{include:"#subMsgOption"}]},package:{captures:{1:{name:"keyword.other.proto"},2:{name:"string.unquoted.proto.package"},3:{name:"punctuation.terminator.proto"}},match:"\\s*(package)\\s+([\\w.]+)\\s*(;)"},reserved:{begin:"(reserved)\\s+",beginCaptures:{1:{name:"keyword.other.proto"}},end:"(;)",endCaptures:{1:{name:"punctuation.terminator.proto"}},patterns:[{captures:{1:{name:"constant.numeric.proto"},3:{name:"keyword.other.proto"},4:{name:"constant.numeric.proto"}},match:"(\\d+)(\\s+(to)\\s+(\\d+))?"},{include:"#string"}]},rpcKeywords:{match:"\\b(stream|returns)\\b",name:"keyword.other.proto"},service:{begin:"(service)\\s+([A-Za-z][A-Za-z0-9_.]*)\\s*\\{?",beginCaptures:{1:{name:"keyword.other.proto"},2:{name:"entity.name.class.message.proto"}},end:"\\}",patterns:[{include:"#comments"},{include:"#optionStmt"},{include:"#method"}]},storagetypes:{match:"\\b(double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\\b",name:"storage.type.proto"},string:{match:"('([^']|\\')*')|(\"([^\"]|\\\")*\")",name:"string.quoted.double.proto"},subMsgOption:{begin:"\\{",end:"\\}",patterns:[{include:"#kv"},{include:"#comments"}]},syntax:{captures:{1:{name:"keyword.other.proto"},2:{name:"keyword.operator.assignment.proto"},3:{name:"string.quoted.double.proto.syntax"},4:{name:"punctuation.terminator.proto"}},match:'\\s*(syntax)\\s*(=)\\s*("proto[23]")\\s*(;)'}},scopeName:"source.proto"})]}}]);