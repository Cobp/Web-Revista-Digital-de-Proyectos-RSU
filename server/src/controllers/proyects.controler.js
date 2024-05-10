import proyectModel from "../models/proyect.model.js";

export const getProyects = async(req, res) =>{
    try {
        const proyect = await proyectModel.find();
        res.json(proyect);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"});
    }
}

export const createProyect = async(req, res) =>{
    const { 
        ProyectCode,
        ProyectName,
        ProjectDescription,
        StartingSemester,
        EndingSemester,
        UniversityFunction,
        ResponsibleCareer,
        FacultyInCharge,
        ResponsibleCoordinator,
        InternalResponsibleData,
        RelatedExternalEntity,
        ExternalEntityData
    } = req.body;
    
    const ImgProyect = req.file;

    try {
        const newProyect = new proyectModel({
            ProyectCode,
            ImgProyect,/*: '/uploads/'+ ImgProyect.filename */
            ProyectName,
            ProjectDescription,
            StartingSemester,
            EndingSemester,
            UniversityFunction,
            ResponsibleCareer,
            FacultyInCharge,
            ResponsibleCoordinator,
            InternalResponsibleData,
            RelatedExternalEntity,
            ExternalEntityData
        });
    
        const ProyectoNuevo = await newProyect.save();
        res.json(ProyectoNuevo);
    } catch (error) {
        return res.status(404).json({message: "Proyect not found"});
    }
    
}

export const getProyect = async(req, res) =>{
    try {
        const proyect = await proyectModel.findById(req.params.id);
        if(!proyect) return res.status(404).json({message: "Proyect not found"})
        res.json(proyect);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"});
    }
}

export const deleteProyect = async(req, res) =>{
    try {
        const proyect = await proyectModel.findByIdAndDelete(req.params.id);
        if(!proyect) return res.status(404).json({message: "Proyect not found"})
        res.json(proyect);
    } catch (error) {
        return res.status(404).json({message: "Proyect not found"});
    }
}

export const updateProyect = async(req, res) =>{
    try {
        const proyect = await proyectModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if(!proyect) return res.status(404).json({message: "Proyect not found"})
        res.json(proyect);
    } catch (error) {
        return res.status(404).json({message: "Proyect not found"});
    }
}
