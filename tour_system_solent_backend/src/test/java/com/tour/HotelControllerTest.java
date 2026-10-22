package com.tour;

import com.tour.controller.HotelController;
import com.tour.model.Hotel;
import com.tour.repository.HotelRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class HotelControllerTest {

    @Mock
    private HotelRepository hotelRepository;
    Selenium
    @InjectMocks
    private HotelController hotelController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testNewHotel() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Hotel newHotel = new Hotel();
        newHotel.setHotelname("Hotel ABC");
        newHotel.setHoteladdress("Address 123");
        newHotel.setHotelemail("hotel@example.com");
        newHotel.setHotelmobile("123456789");
        newHotel.setRoomcount(10);

        Method newHotelMethod = HotelController.class.getDeclaredMethod("newHotel", Hotel.class);
        newHotelMethod.setAccessible(true);

        when(hotelRepository.save(any(Hotel.class))).thenReturn(newHotel);

        Hotel savedHotel = (Hotel) newHotelMethod.invoke(hotelController, newHotel);

        assertEquals(newHotel, savedHotel);

        verify(hotelRepository, times(1)).save(any(Hotel.class));
    }

    // Other test methods...

}


