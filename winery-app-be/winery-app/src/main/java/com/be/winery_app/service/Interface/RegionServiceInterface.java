package com.be.winery_app.service.Interface;

import com.be.winery_app.dto.RegionDTO;

import java.util.List;

public interface RegionServiceInterface {

    List<RegionDTO> getAllRegionData();
    RegionDTO getRegionObjectById(Integer id);
    RegionDTO insertNewRegionObjectData(RegionDTO body);
    RegionDTO updateExistingRegionObjectData(RegionDTO body);
    RegionDTO deleteRegionObjectData(Integer id);
}
