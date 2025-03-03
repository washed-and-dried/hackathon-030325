package com.washed.RennalaLib.dto;

import com.washed.RennalaLib.models.MyUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GenericResponse {
    private String message;
    private MyUser user;
}
