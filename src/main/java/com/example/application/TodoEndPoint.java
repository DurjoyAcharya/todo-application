package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class TodoEndPoint {
    public String getTitle(){
        return "Durjoy-V3";
    }
}
