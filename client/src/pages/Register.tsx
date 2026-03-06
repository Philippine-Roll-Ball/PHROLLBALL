// registration component
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/hook/useAuth";
import { loginUser } from "@/services/apiService";


